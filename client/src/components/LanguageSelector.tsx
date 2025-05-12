import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-secondary transition-colors">
        <Globe className="h-4 w-4" />
        <span className="text-sm">{t('languageSelector.title')}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem
          onClick={() => changeLanguage('en')}
          className="flex justify-between items-center cursor-pointer"
        >
          {t('languageSelector.en')}
          {i18n.language === 'en' && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage('es')}
          className="flex justify-between items-center cursor-pointer"
        >
          {t('languageSelector.es')}
          {i18n.language === 'es' && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage('fr')}
          className="flex justify-between items-center cursor-pointer"
        >
          {t('languageSelector.fr')}
          {i18n.language === 'fr' && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;