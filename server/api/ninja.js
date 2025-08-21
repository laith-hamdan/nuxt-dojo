export default defineEventHandler(async (event) => {
  // query params (?name=mario)
//   const { name } = getQuery(event)

//   // POST body ({ "age": 30 })
//   const { age } = await readBody(event)

    const { data } = await $fetch ('https://api.currencyapi.com/v3/latest?apikey=cur_live_k1FKWVms0HrMls8mr4jDE24WyEZZnNNNfOIEBvHT')

  return {
    message: data
  }
})