import { ContentHtml } from "./components/contentHtml"
import { Header } from "./components/header/header"
import { Notice } from "./components/header/notice"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Title } from "./components/header/title"
import { Clock } from "lucide-react"

export default function App() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 w-full h-full">
      <Header/>
      <Notice/>
      <main className="w-full">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <Card className="w-full mt-2 md:w-3/4 md:mt-4 md:ml-4">
            <CardContent>
              <div className="mt-5">
                <h1 className="text-3xl mb-3 font-bold">
                  <Title/>
                </h1>
                <Separator/>
                <div className="mt-3">
                  <ContentHtml className="font-bold" />
                </div>
              </div>
            </CardContent>
            <Separator/>
            <CardFooter className="mt-3">
              최근변경일
            </CardFooter>
          </Card>
          <Card className="w-full md:w-1/4 md:mt-4 md:mr-4">
            <CardHeader>
              <CardTitle className="flex gap-3 text-xl"><Clock />최근변경</CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent>
              <div x-show="$store.state.recent.length === 0">
                문서를 편집해보세요!
              </div>
              <div x-show="$store.state.recent.length > 0">
                <ul>
                  {window.store.recent.slice(0, 15).map((r, i) => (
                    <li key={i}>
                      <a href={`/w/${r.document}`} key={r}>{r.document}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex"><a href="//testwiki.hyonsu.com">the tree</a>&nbsp;|&nbsp;<p>modern</p></CardTitle>
        </CardHeader>
      </Card>
      </footer>
    </div>
  )
}
