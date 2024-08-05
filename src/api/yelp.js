import axios from "axios"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer DVbfg7Elv1R2yJ-2gxOsRQ7bhu_Mstjw3GM3Ds-eraNDnRqrH8unaYh7Ea0-v75ZxrfejPBlbA5HclV2ryRR_qUVhqaZVpDlS3UKbkDFin-wgXCcQf99tfLNbH6fXnYx"
    }
})
