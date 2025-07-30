import * as dateFns from "date-fns";
import { id } from "date-fns/locale";

export const formatDateKeystatic = (date: string) => {
  return dateFns.format(dateFns.parse(date, "yyyy-MM-dd", new Date()), "eeee, d MMMM yyyy", {
    locale: id,
  });
};

export const parseDateKeystatic = (date: string) => {
  return dateFns.parse(date, "yyyy-MM-dd", new Date());
};
