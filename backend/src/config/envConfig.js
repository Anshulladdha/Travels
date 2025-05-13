import dotenv from "dotenv";

const envConfig = () => {
    const res = dotenv.config({
        path: `.env.${process.env.NODE_ENV || "local"}`,
        override: true
    });

    return{
        DB_URL: process.env.DB_URL,
    };
};

export default envConfig;
