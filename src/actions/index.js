import { IMAGES, STATS } from '../constants';

export const loadImages = () => ({
  type: IMAGES.LOAD
});

export const setImages = (images) => ({
  type: IMAGES.SUCCESS,
  images
});

export const setError = (error) => ({
  type: IMAGES.FAIL,
  error
});

export const loadImageStats = id => ({
  type: STATS.LOAD,
  id
});

export const setImageStats = (id, downloads) => ({
  type: STATS.SUCCESS,
  id,
  downloads
});

export const setImageStatsError = id => ({
  type: STATS.FAIL,
  id
});