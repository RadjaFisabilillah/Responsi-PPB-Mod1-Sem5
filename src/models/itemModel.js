import { supabase } from "../config/supabaseClient.js";

export const ItemModel = {
  // Fitur getAll dengan filter status
  async getAll(status) {
    let query = supabase.from("items").select("*");

    // Jika ada parameter status, tambahkan filter .eq()
    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(payload) {
    // Payload bisa berisi { nama, status, tanggalMasuk, tanggalSelesai }
    const { data, error } = await supabase
      .from("items")
      .insert([payload])
      .select()
      .single(); // Gunakan .single() untuk create
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("items")
      .update(payload)
      .eq("id", id)
      .select()
      .single(); // Gunakan .single() untuk update
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) throw error;
    return { message: "Data sepatu berhasil dihapus." };
  },
};
