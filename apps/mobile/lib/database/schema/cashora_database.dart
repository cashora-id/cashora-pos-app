import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:drift_sqflite/drift_sqflite.dart';
import 'package:flutter/foundation.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';
import 'package:sqlcipher_flutter_libs/sqlcipher_flutter_libs.dart';

// ── Table imports (generated) ─────────────────────────────────────────────────
part 'cashora_database.g.dart';

// ─────────────────────────────────────────────────────────────────────────────
// Cashora Local Database — Drift (SQLite + SQLCipher AES-256-GCM)
//
// This is the SINGLE source of truth for all offline-first operations.
// Tables defined here are replicated from the backend via the delta sync engine.
// The encryption key is derived from the hardware Keystore / Secure Enclave.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Tables ──────────────────────────────────────────────────────────────────

class Products extends Table {
  TextColumn get id           => text()();
  TextColumn get tenantId     => text()();
  TextColumn get branchId     => text().nullable()();
  TextColumn get name         => text()();
  TextColumn get sku          => text()();
  TextColumn get barcode      => text().nullable()();
  IntColumn  get priceInRupiah => integer()();
  IntColumn  get stock        => integer().withDefault(const Constant(0))();
  TextColumn get categoryId   => text().nullable()();
  BoolColumn get isActive     => boolean().withDefault(const Constant(true))();
  DateTimeColumn get updatedAt => dateTime()();
  DateTimeColumn get syncedAt  => dateTime().nullable()();

  @override
  Set<Column> get primaryKey => {id};
}

class Orders extends Table {
  TextColumn get id           => text()();
  TextColumn get tenantId     => text()();
  TextColumn get branchId     => text()();
  TextColumn get cashierId    => text()();
  TextColumn get status       => text()();           // DRAFT|CONFIRMED|PAID|VOIDED
  IntColumn  get totalAmount  => integer()();
  IntColumn  get taxAmount    => integer().withDefault(const Constant(0))();
  IntColumn  get discountAmount => integer().withDefault(const Constant(0))();
  TextColumn get paymentMethod => text().nullable()();
  TextColumn get notes        => text().nullable()();
  BoolColumn get isSynced     => boolean().withDefault(const Constant(false))();
  DateTimeColumn get createdAt => dateTime()();
  DateTimeColumn get updatedAt => dateTime()();

  @override
  Set<Column> get primaryKey => {id};
}

class OrderItems extends Table {
  TextColumn get id          => text()();
  TextColumn get orderId     => text().references(Orders, #id)();
  TextColumn get productId   => text()();
  TextColumn get productName => text()();
  IntColumn  get quantity    => integer()();
  IntColumn  get unitPrice   => integer()();
  IntColumn  get subtotal    => integer()();

  @override
  Set<Column> get primaryKey => {id};
}

class SyncMetadata extends Table {
  TextColumn get tableName    => text()();
  DateTimeColumn get lastPulledAt => dateTime().nullable()();
  IntColumn  get pendingPushCount => integer().withDefault(const Constant(0))();
  TextColumn get conflictPolicy   => text().withDefault(const Constant('last-write-wins'))();

  @override
  Set<Column> get primaryKey => {tableName};
}

// ─── Database ─────────────────────────────────────────────────────────────────

@DriftDatabase(tables: [Products, Orders, OrderItems, SyncMetadata])
class CashoraDatabase extends _$CashoraDatabase {
  CashoraDatabase(super.e);

  @override
  int get schemaVersion => 1;

  @override
  MigrationStrategy get migration => MigrationStrategy(
    onCreate: (m) async {
      await m.createAll();
    },
    onUpgrade: (m, from, to) async {
      // Schema migrations will be added here incrementally
    },
  );

  static Future<CashoraDatabase> open({required String encryptionKey}) async {
    final dbFolder = await getApplicationDocumentsDirectory();
    final file = dbFolder.uri.resolve('cashora_pos.sqlite').toFilePath();

    final executor = kDebugMode
        ? NativeDatabase.createInBackground(
            File(p.join(dbFolder.path, 'cashora_pos_dev.sqlite')),
          )
        : SqfliteQueryExecutor.inDatabaseFolder(
            path: file,
            // SQLCipher passphrase derived from hardware Keystore
            creationPassphrase: encryptionKey,
          );

    return CashoraDatabase(executor);
  }
}
