import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const languages = [
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
	{ code: 'it', name: 'Italiano', flag: '🇮🇹' },
]

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (langCode: string) => {
		i18n.changeLanguage(langCode)
	}

	const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0]

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm" className="gap-2">
					<Globe className="h-4 w-4" />
					<span>{currentLang.flag}</span>
					<span className="hidden sm:inline">{currentLang.name}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => changeLanguage(lang.code)}
						className={i18n.language === lang.code ? 'bg-muted' : ''}
					>
						<span className="mr-2">{lang.flag}</span>
						{lang.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageSwitcher




