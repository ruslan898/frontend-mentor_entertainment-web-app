import { useOutletContext } from 'react-router';
import type { OutletCountext } from '../../types/models';

export function useEntertainmentContext() {
  return useOutletContext<OutletCountext>();
}
