import dayjs from "dayjs";

export const useDate = () => {
    /**
     * @param {string} datestring
     * */
    const formatDate = (datestring) =>
        dayjs(datestring).format("YYYY-MM-DD HH:mm:ss");

    return {
        formatDate,
    };
};
