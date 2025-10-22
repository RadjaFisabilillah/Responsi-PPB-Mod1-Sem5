````markdown
# REST API Daftar Barang Cuci Sepatu

## Deskripsi Umum

Proyek ini merupakan tugas responsi untuk modul Pembuatan API dengan JavaScript. [cite_start]API ini dibuat menggunakan Node.js dan Express.js, berfungsi untuk mengelola data sepatu yang sedang dicuci pada sebuah layanan jasa cuci sepatu[cite: 1]. [cite_start]API ini menggunakan Supabase sebagai database-nya [cite: 12] [cite_start]dan di-deploy ke Vercel[cite: 790].

[cite_start]Tujuan utama proyek ini adalah untuk mempermudah proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui REST API sederhana[cite: 1].

## Tujuan

1.  [cite_start]Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API[cite: 1].
2.  [cite_start]Meningkatkan pemahaman penggunaan Express.js sebagai framework backend[cite: 1].
3.  [cite_start]Mengelola data menggunakan database **Supabase** (PostgreSQL)[cite: 12, 92].
4.  [cite_start]Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata[cite: 1].

## Fitur Utama API

| Metode | Endpoint   | Deskripsi                                                                          |
| :----- | :--------- | :--------------------------------------------------------------------------------- |
| GET    | /items     | Menampilkan seluruh daftar sepatu yang sedang dicuci.                              |
| POST   | /items     | Menambahkan data sepatu baru ke dalam daftar.                                      |
| PUT    | /items/:id | Memperbarui status atau data sepatu (misalnya dari Sedang Dicuci menjadi Selesai). |
| DELETE | /items/:id | Menghapus data sepatu yang sudah selesai dicuci.                                   |

## Struktur Data (Supabase)

Contoh struktur data sepatu yang disimpan di tabel `items`:

```json
{
  "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "nama": "Nike Air Force 1",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": null
}
```
````

Keterangan:

- `id` → UUID (Primary Key) unik yang dibuat oleh Supabase.
- `nama` → Nama sepatu atau merek pelanggan.
- `status` → Status proses cuci (misal: "Sedang Dicuci", "Selesai").
- `tanggalMasuk` → Tanggal sepatu diterima (tipe data `date`).
- `tanggalSelesai` → Tanggal sepatu selesai (tipe data `date`, bisa `null`).

## Bonus Fitur

[cite\_start]API ini juga dilengkapi dengan fitur filter berdasarkan status[cite: 1], misalnya:
`GET /items?status=Selesai`
akan menampilkan hanya sepatu yang sudah selesai dicuci.

## Alur Kerja API

1.  [cite\_start]Pengguna mengirimkan permintaan HTTP (GET, POST, PUT, DELETE) ke server Vercel[cite: 1].
2.  [cite\_start]Server memproses permintaan menggunakan Express.js[cite: 1].
3.  [cite\_start]Controller memanggil Model untuk berinteraksi (CRUD) dengan database Supabase[cite: 12].
4.  [cite\_start]Server mengembalikan respons dalam format JSON[cite: 1].

## Teknologi yang Digunakan

- [cite\_start]**Node.js**: Runtime environment untuk menjalankan JavaScript di sisi server[cite: 1].
- [cite\_start]**Express.js**: Framework untuk membangun REST API[cite: 1, 67].
- [cite\_start]**Supabase**: Backend-as-a-Service berbasis PostgreSQL untuk database[cite: 1, 92].
- [cite\_start]**Vercel**: Platform untuk deployment serverless[cite: 1, 790].

## Langkah Instalasi & Menjalankan Lokal

1.  Clone repositori ini: `git clone https://github.com/RadjaFisabilillah/Responsi-PPB-Mod1-Sem5.git`
2.  Masuk ke direktori: `cd [NAMA_FOLDER]`
3.  Install dependensi: `npm install`
4.  [cite\_start]Buat file `.env` di root proyek[cite: 647].
5.  [cite\_start]Isi `.env` dengan kredensial Supabase Anda[cite: 656]:
    ```
    SUPABASE_URL=...
    SUPABASE_KEY=...
    PORT=3000
    ```
6.  [cite\_start]Jalankan server pengembangan: `npm run dev` [cite: 700]
7.  [cite\_start]API akan berjalan di `http://localhost:3000` [cite: 701]

## Link Deploy Vercel

_(Ganti dengan link Anda setelah deploy)_
[cite\_start]`https://responsi-ppb-mod1-sem5.vercel.app/` [cite: 848, 851]

## Contoh Request dan Response

**`GET /items`**
Response (200 OK):

```json
[
  {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  }
]
```

**`POST /items`**
Body Request:

```json
{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08"
}
```

Response (201 Created):

```json
{
  "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": null
}
```

**`PUT /items/:id`** (misal: `PUT /items/b2c3d4e5-f6a7-8901-2345-67890abcdef1`)
Body Request:

```json
{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
```

Response (200 OK):

```json
{
  "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
  "nama": "Nike Air Max",
  "status": "Selesai",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "2025-10-09"
}
```

**`DELETE /items/:id`** (misal: `DELETE /items/b2c3d4e5-f6a7-8901-2345-67890abcdef1`)
Response (200 OK):

```json
{
  "message": "Data sepatu berhasil dihapus."
}
```

```

```
