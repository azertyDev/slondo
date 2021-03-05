import {number, object} from "yup";


const requiredMsg = 'Поле обязательно для заполнения';


export const getAuctionSchema = (min_price, max_price) => {
    return object({
        bet: number().required(requiredMsg)
            .min(min_price, `Ставка не должна быть меньше чем ${min_price}`)
            .max(max_price, `Ставка не должна быть больше чем ${max_price}`)
    });
}



