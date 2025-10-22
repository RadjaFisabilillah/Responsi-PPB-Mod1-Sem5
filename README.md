# REST API Daftar Barang Cuci Sepatu

## Deskripsi Umum

Proyek ini merupakan tugas responsi untuk modul Pembuatan API dengan JavaScript. [cite_start]API ini dibuat menggunakan Node.js dan Express.js, berfungsi untuk mengelola data sepatu yang sedang dicuci pada sebuah layanan jasa cuci sepatu. [cite_start]API ini menggunakan Supabase sebagai database-nya [cite_start]dan di-deploy ke Vercel[cite: 790].

[cite_start]Tujuan utama proyek ini adalah untuk mempermudah proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui REST API sederhana.

## Tujuan

1.  [cite_start]Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.
2.  [cite_start]Meningkatkan pemahaman penggunaan Express.js sebagai framework backend.
3.  [cite_start]Mengelola data menggunakan database **Supabase** (PostgreSQL)[cite: 12, 92].
4.  [cite_start]Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata.

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

Keterangan:

id → UUID (Primary Key) unik yang dibuat oleh Supabase.

nama → Nama sepatu atau merek pelanggan.

status → Status proses cuci (misal: "Sedang Dicuci", "Selesai").

tanggalMasuk → Tanggal sepatu diterima (tipe data date).

tanggalSelesai → Tanggal sepatu selesai (tipe data date, bisa null).

Bonus Fitur
API ini juga dilengkapi dengan fitur filter berdasarkan status, misalnya: GET /items?status=Selesai akan menampilkan hanya sepatu yang sudah selesai dicuci.


Alur Kerja API
Pengguna mengirimkan permintaan HTTP (GET, POST, PUT, DELETE) ke server Vercel.


Server memproses permintaan menggunakan Express.js.


Controller memanggil Model untuk berinteraksi (CRUD) dengan database Supabase.

Server mengembalikan respons dalam format JSON.


Teknologi yang Digunakan

Node.js: Runtime environment untuk menjalankan JavaScript di sisi server.



Express.js: Framework untuk membangun REST API.




Supabase: Backend-as-a-Service berbasis PostgreSQL untuk database.




Vercel: Platform untuk deployment serverless.


Langkah Instalasi & Menjalankan Lokal
Clone repositori ini: git clone [URL_GITHUB_ANDA]

Masuk ke direktori: cd [NAMA_FOLDER]

Install dependensi: npm install

Buat file .env di root proyek.

Isi .env dengan kredensial Supabase Anda:

SUPABASE_URL=...
SUPABASE_KEY=...
PORT=3000

Jalankan server pengembangan: npm run dev

API akan berjalan di http://localhost:3000

Link Deploy Vercel
https://responsi-ppb-mod1-sem5.vercel.app

Contoh Request dan Response
GET /items Response (200 OK):

JSON

[
  {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  }
]
POST /items Body Request:

JSON

{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08"
}
Response (201 Created):

JSON

{
  "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": null
}
PUT /items/:id (misal: PUT /items/b2c3d4e5-f6a7-8901-2345-67890abcdef1) Body Request:

JSON

{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
Response (200 OK):

JSON

{
  "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
  "nama": "Nike Air Max",
  "status": "Selesai",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "2025-10-09"
}
DELETE /items/:id (misal: DELETE /items/b2c3d4e5-f6a7-8901-2345-67890abcdef1) Response (200 OK):

JSON

{
  "message": "Data sepatu berhasil dihapus."
}
```
