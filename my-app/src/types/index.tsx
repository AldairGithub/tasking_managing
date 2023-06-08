import { Dispatch, SetStateAction } from "react"

export type MainPageFormat = {
  listing: boolean,
  setListing: Dispatch<SetStateAction<boolean>>;
}

export type TitleProps = {
  title: string,
  tasksDue?: string
}