import moment from 'moment'

export const formatTime = (time: number): string => {
  return moment(time * 1000).fromNow()
}
