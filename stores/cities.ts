import { defineStore } from "pinia";
import api from "~/api";

export const useCitiesStore = defineStore('cities', () => {

  const cities = ref()

  const fetchCities = () => {
    const response = api.cities.all()
    response.then(
      (res) => {
          cities.value = res.data
      }
  )
  }

  return { cities, fetchCities }
})