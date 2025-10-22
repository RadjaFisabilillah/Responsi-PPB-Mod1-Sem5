# 🧼 REST API Daftar Barang Cuci Sepatu

## 📘 Deskripsi Umum

Proyek ini merupakan tugas responsi untuk modul **Pembuatan API dengan JavaScript**.  
API ini dibangun menggunakan **Node.js** dan **Express.js** untuk mengelola data sepatu yang sedang dicuci pada layanan **jasa cuci sepatu**.  
Database yang digunakan adalah **Supabase (PostgreSQL)**, dan proyek ini **dideploy ke Vercel**.

Tujuan utama proyek ini adalah untuk mempermudah proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui REST API sederhana.

---

## 🎯 Tujuan

1. Mengimplementasikan konsep **CRUD (Create, Read, Update, Delete)** dalam REST API.
2. Meningkatkan pemahaman penggunaan **Express.js** sebagai framework backend.
3. Mengelola data menggunakan database **Supabase**.
4. Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata.

---

## ⚙️ Fitur Utama API

| Metode     | Endpoint     | Deskripsi                                                                              |
| :--------- | :----------- | :------------------------------------------------------------------------------------- |
| **GET**    | `/items`     | Menampilkan seluruh daftar sepatu yang sedang dicuci.                                  |
| **POST**   | `/items`     | Menambahkan data sepatu baru ke dalam daftar.                                          |
| **PUT**    | `/items/:id` | Memperbarui status atau data sepatu (misalnya dari _Sedang Dicuci_ menjadi _Selesai_). |
| **DELETE** | `/items/:id` | Menghapus data sepatu yang sudah selesai dicuci.                                       |

---

## 🧩 Struktur Data (Supabase)

Contoh struktur data tabel `items`:

```json
{
  "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "nama": "Nike Air Force 1",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": null
}
```

**Keterangan:**

- `id` → UUID unik yang dibuat oleh Supabase.
- `nama` → Nama sepatu atau merek pelanggan.
- `status` → Status proses cuci (`Sedang Dicuci`, `Selesai`, dll).
- `tanggalMasuk` → Tanggal sepatu diterima (`date`).
- `tanggalSelesai` → Tanggal sepatu selesai (`date`, dapat bernilai `null`).

---

## 🔍 Bonus Fitur

API ini mendukung **filter berdasarkan status**, contoh:

```
GET /items?status=Selesai
```

Menampilkan hanya sepatu yang sudah selesai dicuci.

---

## 🔄 Alur Kerja API

1. Pengguna mengirimkan permintaan HTTP (`GET`, `POST`, `PUT`, `DELETE`) ke server **Vercel**.
2. Server memproses permintaan menggunakan **Express.js**.
3. **Controller** memanggil **Model** untuk berinteraksi (CRUD) dengan **Supabase**.
4. Server mengembalikan respons dalam format **JSON**.

---

## 🛠️ Teknologi yang Digunakan

- **Node.js** – Runtime environment untuk JavaScript di sisi server.
- **Express.js** – Framework untuk membangun REST API.
- **Supabase** – Database berbasis PostgreSQL (Backend-as-a-Service).
- **Vercel** – Platform untuk deployment serverless.

---

## 💻 Langkah Instalasi & Menjalankan Lokal

1. Clone repositori:

   ```bash
   git clone https://github.com/RadjaFisabilillah/Responsi-PPB-Mod1-Sem5.git
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd [NAMA_FOLDER]
   ```

3. Install dependensi:

   ```bash
   npm install
   ```

4. Buat file `.env` di root proyek dan isi dengan kredensial Supabase:

   ```env
   SUPABASE_URL=...
   SUPABASE_KEY=...
   PORT=3000
   ```

5. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

6. Akses API di:

   ```
   http://localhost:3000
   ```

---

## 🌐 Link Deploy Vercel

`https://responsi-ppb-mod1-sem5.vercel.app/`

---

## 📡 Contoh Request dan Response

### **GET /items**

**Response (200 OK):**

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

---

### **POST /items**

**Body Request:**

```json
{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08"
}
```

**Response (201 Created):**

```json
{
  "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": null
}
```

---

### **PUT /items/:id**

Contoh: `PUT /items/b2c3d4e5-f6a7-8901-2345-67890abcdef1`

**Body Request:**

```json
{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
```

**Response (200 OK):**

```json
{
  "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
  "nama": "Nike Air Max",
  "status": "Selesai",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "2025-10-09"
}
```

---

### **DELETE /items/:id**

Contoh: `DELETE /items/b2c3d4e5-f6a7-8901-2345-67890abcdef1`

**Response (200 OK):**

```json
{
  "message": "Data sepatu berhasil dihapus."
}
```

```

```
