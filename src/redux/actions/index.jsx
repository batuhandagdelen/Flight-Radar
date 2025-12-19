import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { params } from "../../utils/constants";

// bölgedeki tüm uçuş verilerini alacak asenkron thunk aksiyonu
export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const res = await api.get("/list-in-boundary", { params });
  const formatted = res.data.aircraft.map((i) => ({
    flightId: i[0],
    callsign: i[1],
    lat: i[2],
    lon: i[3],
    direction: i[4],
    altitude: i[5],
    speed: i[6],
  }));

  return formatted;
});

// istenilen uçağın detaylarını alacak asenkron thunk aksiyonu

export const getDetails = createAsyncThunk(
  "flight/getDetails",
  async (flight) => {
    const res = await api.get("/detail", { params: { flight } });

    return res.data;
  }
);
