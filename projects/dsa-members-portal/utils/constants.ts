export type Option = {
  id?: string;
  value?: string;
  title?: string;
  label?: string;
  description?: string;
  icon?: { className: string };
  className?: string;
  hexaColor?: string;
};

export const USER_STATUS_OPTIONS: Option[] = [
  {
    id: "active",
    value: "active",
    title: "Activo",
    label: "Activo",
    icon: { className: "" },
    className: `bg-green-500 `,
    hexaColor: "#34a34a",
  },
  {
    id: "inactive",
    value: "inactive",
    title: "Inactivo",
    label: "Inactivo",
    icon: { className: "" },
    className: `bg-gray-500 `,
    hexaColor: "#999999",
  },
];

export const ENTRY_TYPE_OPTIONS: Option[] = [
  {
    id: "entry",
    value: "entry",
    title: "Entrada",
    label: "Entrada",
    icon: { className: "mdi-location-enter" },
    className: "bg-green-500 ",
    hexaColor: "#34a34a",
  },
  {
    id: "exit",
    value: "exit",
    title: "Salida",
    label: "Salida",
    icon: { className: "mdi-location-exit" },
    className: "bg-red-500 ",
    hexaColor: "#E53E3E",
  },
];

export const USER_TYPE_OPTIONS: Option[] = [
  {
    id: "user-owner",
    value: "user-owner",
    title: "Propietario",
    label: "Propietario",
    icon: { className: "mdi-account-crown" },
    className: "bg-purple-500 ",
    hexaColor: "#8B5CF6",
  },
  {
    id: "user-standard",
    value: "user-standard",
    title: "Beneficiario",
    label: "Beneficiario",
    icon: { className: "mdi-account" },
    className: "bg-pink-500 ",
    hexaColor: "#EC4899",
  },
  {
    id: "staff-admin",
    value: "staff-admin",
    title: "Administrador",
    label: "Administrador",
    icon: { className: "mdi-account-cog" },
    className: "bg-yellow-500 ",
    hexaColor: "#D97706",
  },
  {
    id: "staff-maintenance",
    value: "staff-maintenance",
    title: "Mantenimiento",
    label: "Mantenimiento",
    icon: { className: "mdi-wrench" },
    className: "bg-gray-500 ",
    hexaColor: "#999999",
  },
  {
    id: "staff-security",
    value: "staff-security",
    title: "Seguridad",
    label: "Seguridad",
    icon: { className: "mdi-security" },
    className: "bg-black text-white",
    hexaColor: "#000000",
  },
  {
    id: "staff-coach",
    value: "staff-coach",
    title: "Entrenador",
    label: "Entrenador",
    icon: { className: "mdi-whistle" },
    className: "bg-red-500 ",
    hexaColor: "#E53E3E",
  },
];

export const VEHICLE_TYPE_OPTIONS: Option[] = [
  {
    id: "car",
    value: "car",
    title: "Carro",
    label: "Carro",
    icon: { className: "mdi-car" },
    className: "bg-blue-500 ",
    hexaColor: "#4299E1",
  },
  {
    id: "suv",
    value: "suv",
    title: "Camioneta",
    label: "Camioneta",
    icon: { className: "mdi-car-sport-utility-vehicle" },
    className: "bg-yellow-500 ",
    hexaColor: "#D97706",
  },
  {
    id: "pickup",
    value: "pickup",
    title: "Pickup",
    label: "Pickup",
    icon: { className: "mdi-car-pickup" },
    className: "bg-green-500 ",
    hexaColor: "#34a34a",
  },
  {
    id: "truck",
    value: "truck",
    title: "Camión",
    label: "Camión",
    icon: { className: "mdi-truck" },
    className: "bg-red-500 ",
    hexaColor: "#E53E3E",
  },
  {
    id: "motorcycle",
    value: "motorcycle",
    title: "Motocicleta",
    label: "Motocicleta",
    icon: { className: "mdi-motorbike" },
    className: "bg-gray-500 ",
    hexaColor: "#999999",
  },
  {
    id: "other",
    value: "other",
    title: "Otro",
    label: "Otro",
    icon: { className: "mdi-car" },
    className: "bg-gray-500 ",
    hexaColor: "#999999",
  },
];

export const STATEMENT_TYPE_OPTIONS = [
  {
    id: "contribution",
    label: "Aportación",
    icon: { className: "mdi-bank" },
  },
  {
    id: "order",
    label: "Orden",
    icon: { className: "mdi-file-document-edit" },
  },
];
