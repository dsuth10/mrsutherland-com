import { Effect, CategoryType } from './types';

export const CATEGORIES: { name: CategoryType; bgColor: string; borderColor: string; highlightColor: string; }[] = [
    { name: 'Social', bgColor: 'bg-blue-100', borderColor: 'border-blue-500', highlightColor: 'bg-blue-200' },
    { name: 'Environmental', bgColor: 'bg-green-100', borderColor: 'border-green-500', highlightColor: 'bg-green-200' },
    { name: 'Economic', bgColor: 'bg-yellow-100', borderColor: 'border-yellow-500', highlightColor: 'bg-yellow-200' },
];

export const EFFECTS: Effect[] = [
  { id: '1', text: 'Loss of human life', category: 'Social', icon: '😔', explanation: 'Floods can be very dangerous and sadly, people can get hurt. This affects families and communities.' },
  { id: '2', text: 'Psychological effects (e.g. nightmares, anxiety)', category: 'Social', icon: '😟', explanation: 'Experiencing a flood can be scary and leave people feeling worried or sad for a long time.' },
  { id: '3', text: 'Health conditions', category: 'Social', icon: '🏥', explanation: 'Floodwater can carry germs that make people sick.' },
  { id: '4', text: 'Loss of homes and jobs', category: 'Social', icon: '🏠', explanation: 'When homes and workplaces are destroyed, it deeply impacts people\'s lives and well-being.' },
  { id: '5', text: 'Relief for drought conditions', category: 'Environmental', icon: '💧', explanation: 'While floods are destructive, they can also bring needed water to very dry areas, helping plants grow again.' },
  { id: '6', text: 'Removal of vegetation and topsoil', category: 'Environmental', icon: '🌱', explanation: 'The force of floodwater can wash away plants and the healthy top layer of soil that plants need to grow.' },
  { id: '7', text: 'Loss of habitats', category: 'Environmental', icon: '🌳', explanation: 'When floods destroy forests and fields, animals lose their homes and food sources.' },
  { id: '8', text: 'Dispersal of weed species', category: 'Environmental', icon: '🌿', explanation: 'Floodwaters can carry seeds from unwanted plants (weeds) to new places, harming local nature.' },
  { id: '9', text: 'Disruption to water supply, electricity, transport, communication, education', category: 'Economic', icon: '💡', explanation: 'Floods can damage power lines, water pipes, roads, and phone lines, which costs a lot of money to fix.' },
  { id: '10', text: 'Damage to property and loss of land value', category: 'Economic', icon: '🏚️', explanation: 'Floods can ruin buildings and land, making them worth less money.' },
  { id: '11', text: 'Damage to crops, fencing and loss of livestock', category: 'Economic', icon: '🚜', explanation: 'Farms can be badly damaged, losing crops and animals. This costs farmers a lot of money.' },
  { id: '12', text: 'Downturn in tourism', category: 'Economic', icon: '✈️', explanation: 'When an area is flooded, tourists stop visiting, which means local businesses lose money.' },
];
