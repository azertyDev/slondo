import {number, object} from "yup";
import {fieldIsRequired} from "@src/common_data/form_fields";

export const getAuctionSchema = (min_price: number, max_price: number) => {
    return object({
        bet: number().required(fieldIsRequired)
            .min(min_price, `Ставка не должна быть меньше чем ${min_price}`)
            .max(max_price, `Ставка не должна быть больше чем ${max_price}`)
    });
};