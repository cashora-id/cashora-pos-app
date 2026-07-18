import 'package:cashora_mobile/core/di/injection.dart';
import 'package:cashora_mobile/core/router/app_router.dart';
import 'package:cashora_mobile/core/theme/app_theme.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// Cashora Mobile — Application Entry Point
///
/// Architecture: Feature-first with Clean Architecture layers per feature.
/// Offline-First: Drift (SQLCipher) is the source of truth; server is a sync target.
/// Security: RASP check, Play Integrity attestation, and biometric gate run before UI.
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // ── System UI Chrome ──────────────────────────────────────────────────────
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);

  // ── Firebase ──────────────────────────────────────────────────────────────
  await Firebase.initializeApp();

  // ── Dependency Injection ──────────────────────────────────────────────────
  await configureDependencies();

  runApp(const CashoraApp());
}

class CashoraApp extends StatelessWidget {
  const CashoraApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Cashora POS',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light(),
      darkTheme: AppTheme.dark(),
      themeMode: ThemeMode.system,
      routerConfig: AppRouter.router,
    );
  }
}
