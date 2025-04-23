import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './app.store';

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
