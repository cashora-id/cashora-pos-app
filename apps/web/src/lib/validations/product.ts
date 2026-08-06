import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Nama produk minimal 2 karakter"),
  sku: z.string().optional(),
  price: z.number().min(0, "Harga produk tidak boleh negatif"),
  costPrice: z.number().min(0, "Harga pokok (COGS) tidak boleh negatif").optional(),
  stock: z.number().int().min(0, "Stok awal minimal 0"),
  categoryId: z.string().min(1, "Kategori wajib dipilih"),
  description: z.string().optional(),
  isAvailable: z.boolean().default(true),
});

export type ProductSchemaType = z.infer<typeof productSchema>;
