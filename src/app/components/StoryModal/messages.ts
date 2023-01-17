import { translations } from '@/locales/translations'
import { _t } from '@/utils/messages'

export const messages = {
  storyModalTitle: () => _t(translations.story),
  totalMoreReplies: () => _t(translations.totalMoreReplies),
  totalCommments: () => _t(translations.totalCommments),
  loadMore: () => _t(translations.loadMore),
  loading: () => _t(translations.loading)
}
