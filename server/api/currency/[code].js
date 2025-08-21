export default defineEventHandler(async (event) =>{

    const { code } = event.context.params
    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`

    const { data } = await $fetch(uri)

    return data

} )

//http://api.currencyapi.com/v3/latest?apikey=cur_live_k1FKWVms0HrMls8mr4jDE24WyEZZnNNNfOIEBvHT
//http://api.currencyapi.com/v3/latest?apikey=cur_live_k1FKWVms0HrMls8mr4jDE24WyEZZnNNNfOIEBvHT&currencies=EUR%2CUSD%2CCAD%2CAFN%2CAED&base_currency=AED