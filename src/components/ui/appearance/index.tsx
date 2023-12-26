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
import { Sun, Moon, Laptop2, Languages } from 'lucide-react'
import { useThemeStore } from '@/stores/theme'

type Props = {
  separator?: boolean
  title?: boolean
}

const Appearance = (props: Props) => {
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

  const handleThemeChange = (value: string) => {
    useThemeStore.setState({ theme: value })
  }

  return (
    <div className="Appearance flex gap-x-2 text-xs leading-3">
      <Select
        onValueChange={handleThemeChange}
        defaultValue={theme || undefined}
        value={theme || undefined}
      >
        <SelectTrigger className="h-9 flex items-center gap-x-2 px-2 border rounded-md bg-none! hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          {theme === 'Light' && <Sun className="Icon w-4 h-4" />}

          {theme === 'Dark' && <Moon className="Icon w-4 h-4" />}

          {theme === 'System' && <Laptop2 className="Icon w-4 h-4" />}

          {props.separator && <Separator orientation="vertical" />}

          {props.title && <div>{theme}</div>}
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Light">
            <Sun className="Icon w-4 h-4" />
            <div className="mb-0.5">Light</div>
          </SelectItem>

          <SelectItem value="Dark">
            <Moon className="Icon w-4 h-4" />
            <div className="mb-0.5">Dark</div>
          </SelectItem>

          <SelectItem value="System">
            <Laptop2 className="Icon w-4 h-4" />
            <div className="mb-0.5">System</div>
          </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="h-9 flex items-center gap-x-2 px-2 border rounded-md bg-none! hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <Languages className="Icon w-4 h-4" />

          {props.separator && <Separator orientation="vertical" />}

          {props.title && <SelectValue placeholder="Language" />}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="Turkish">Turkish</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Appearance
