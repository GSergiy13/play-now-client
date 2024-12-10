import dayjs from 'dayjs'
import relativeDate from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeDate)

export function transformDate(createAt: string): string {
	return dayjs(createAt).fromNow()
}
