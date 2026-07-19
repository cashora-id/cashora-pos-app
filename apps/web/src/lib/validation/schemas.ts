import { z } from "zod";

/**
 * Standard Zod Schemas for Cashora Web Forms
 * Enforces strict typing and validation constraints.
 */

// 1. Authentication Schemas
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(6, "Password minimal terdiri dari 6 karakter"),
});

export type LoginInput = z.infer<typeof loginSchema>;

// 2. Product / Inventory Item Schemas
export const productSchema = z.object({
  name: z
    .string()
    .min(2, "Nama produk minimal 2 karakter")
    .max(100, "Nama produk maksimal 100 karakter"),
  sku: z
    .string()
    .min(3, "SKU minimal 3 karakter")
    .regex(/^[A-Z0-9_-]+$/, "SKU hanya boleh berisi huruf besar, angka, strip (-), atau underscore (_)"),
  price: z
    .number({ invalid_type_error: "Harga harus berupa angka" })
    .min(0, "Harga tidak boleh kurang dari 0"),
  stock: z
    .number({ invalid_type_error: "Stok harus berupa angka" })
    .int("Stok harus berupa bilangan bulat")
    .min(0, "Stok tidak boleh kurang dari 0"),
  category: z
    .string()
    .min(1, "Kategori wajib dipilih"),
  description: z
    .string()
    .max(500, "Deskripsi maksimal 500 karakter")
    .optional(),
});

export type ProductInput = z.infer<typeof productSchema>;

// 3. Tenant / Branch Schemas
export const branchSchema = z.object({
  name: z
    .string()
    .min(3, "Nama cabang minimal 3 karakter"),
  address: z
    .string()
    .min(10, "Alamat lengkap minimal 10 karakter"),
  phone: z
    .string()
    .min(10, "Nomor telepon minimal 10 digit")
    .regex(/^[0-9+]+$/, "Format nomor telepon tidak valid"),
});

export type BranchInput = z.infer<typeof branchSchema>;
