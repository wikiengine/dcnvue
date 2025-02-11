import { ContentHtml } from "./components/contentHtml"
import { Header } from "./components/header/header"
import { Notice } from "./components/header/notice"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Title } from "./components/header/title"

export default function App() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900">
      <Header/>
      <Notice/>
      <main className="m-4">
        <Card>
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
      </main>
      <hr />
      <footer className="flex bg-white dark:bg-black">
        <a href="//testwiki.hyonsu.com">the tree</a>&nbsp;|&nbsp;<p>modern</p>
      </footer>
    </div>
  )
}