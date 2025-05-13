import dotenv from "dotenv";

const envConfig = () => {
    const res = dotenv.config({
        path: `.env.${process.env.NODE_ENV || "local"}`,
        override: true
    });

    return res.parsed
};

export default envConfig;
