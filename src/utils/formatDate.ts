import { formatDistance } from "date-fns";
import { enGB } from "date-fns/locale/en-GB";

export const formatDate = (date: Date): string => {
  return formatDistance(date, new Date(), { locale: enGB });
};
