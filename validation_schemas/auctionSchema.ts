import {number, object} from "yup";

export const getAuctionSchema = (min_price: number, max_price: number) => {
    return object({
        bet: number()
            .min(min_price, `Ставка не должна быть меньше чем ${min_price}`)
            .max(max_price, `Ставка не должна быть больше чем ${max_price}`)
    });
};