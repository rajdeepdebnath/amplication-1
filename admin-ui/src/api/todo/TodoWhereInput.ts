import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TodoWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
};
