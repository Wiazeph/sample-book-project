// shadcn/ui
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
// shadcn/ui
import { useEffect } from 'react'

import { MdOutlineLightMode } from 'react-icons/md'
import { FaRegMoon } from 'react-icons/fa'
import { GrSystem } from 'react-icons/gr'
import { IoLanguage } from 'react-icons/io5'
import PropTypes from 'prop-types'
import { useThemeStore } from '~/stores/theme'

const Appearance = ({ separator, title }) => {
  const theme = useThemeStore((state) => state.theme)

  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    if (theme === 'Light') {
      element.classList.remove('dark')
      localStorage.setItem('theme', 'Light')
    } else if (theme === 'Dark') {
      element.classList.add('dark')
      localStorage.setItem('theme', 'Dark')
    } else if (theme === 'System') {
      if (darkQuery.matches) {
        element.classList.add('dark')
        localStorage.setItem('theme', 'System')
      } else {
        element.classList.remove('dark')
        localStorage.removeItem('theme')
      }
    }
  }, [theme, darkQuery.matches])

  const handleThemeChange = (value) => {
    useThemeStore.setState({ theme: value })
  }

  return (
    <div className="Appearance flex gap-x-2 text-xs leading-3">
      <Select
        onValueChange={handleThemeChange}
        defaultValue={theme}
        value={theme}
      >
        <SelectTrigger className="h-9 flex items-center gap-x-2 px-2 border rounded-md bg-none! hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors">
          {theme === 'Light' && <MdOutlineLightMode className="Icon w-4 h-4" />}

          {theme === 'Dark' && <FaRegMoon className="Icon w-3.5 h-3.5" />}

          {theme === 'System' && <GrSystem className="Icon w-3.5 h-3.5" />}

          {separator && <Separator orientation="vertical" />}

          {title && <div>{theme}</div>}
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Light">
            <MdOutlineLightMode className="Icon w-4 h-4" />
            <div className="mb-0.5">Light</div>
          </SelectItem>

          <SelectItem value="Dark">
            <FaRegMoon className="Icon w-3.5 h-3.5" />
            <div className="mb-0.5">Dark</div>
          </SelectItem>

          <SelectItem value="System">
            <GrSystem className="Icon w-3.5 h-3.5" />
            <div className="mb-0.5">System</div>
          </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="h-9 flex items-center gap-x-2 px-2 border rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors">
          <IoLanguage asChild className="Icon w-4 h-4" />

          {separator && <Separator orientation="vertical" />}

          {title && <SelectValue placeholder="Language" />}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="Turkish">Turkish</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

Appearance.propTypes = {
  separator: PropTypes.bool.isRequired,
  title: PropTypes.bool.isRequired,
}

export default Appearance
