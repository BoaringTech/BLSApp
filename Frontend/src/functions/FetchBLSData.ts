// This will be used to have the backend fetch data from the BLS API and store it. Returns true on success.
import { API_BASE_URL } from "../constants";

export async function fetchBLSData(input : string) : Promise<boolean> {
  const response = await fetch(
    API_BASE_URL + '/fetch?text=' + input);
  const data = await response.json();
  return data as boolean;
}