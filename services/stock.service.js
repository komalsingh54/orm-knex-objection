import Stocks from '../models/Stock.model';
import StockDetails from '../models/StockDetail.model';


const defaultEagers = ['stockdetails'];

//without transaction
StockDetails
    .query()
    .eager('stocks')
    .then((res) => {
        console.log(JSON.stringify(res));
    });

//with transaction
async function getData() {
  try {
    const Stock = await transaction(Stocks, async (Stocks) => {
      return await Stocks
        .query()
        .eager('stockdetails')
    });
    return Stock;
  } catch (err) {
    console.log('something went wrong', err);
  }
}

getData().then((res) => {
  console.log('res', res);
})

