interface Icon {
  prefix: string;
  suffix: string;
}

interface Category {
  name: string;
  id: number;
  icon: Icon;
}

export interface Place {
  categories: Category[];
  chains: any[];
  distance: number;
  fsq_id: string;
  geocodes: any;
  link: string;
  location: Location;
  name: string;
  related_places: any;
  timezone: string;
}
