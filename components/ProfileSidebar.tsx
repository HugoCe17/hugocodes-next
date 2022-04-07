import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/solid'
import CircularProgress from './CircularProgress'

const languages: any = { English: 99, Spanish: 82 }
const skills: any = {
  html: 75,
  css: 62,
  javascript: 83,
  node: 70,
  // react: 74,
  // vue: 88,
}
const technologies: any = {
  frontend: ['React', 'Vue', 'Sass'],
  backend: ['Node', 'Express', 'GraphQL', 'Mongo', 'SQL'],
  testing: ['Jest', 'Mocha', 'Chai', 'Cypress'],
  frameworks: ['Nuxt.js', 'Next.js'],
  web3: ['Web3', 'Ethers', 'Solidity', 'Truffle', 'Hardhat', 'Ganache'],
  other: ['Git', 'Linux', 'Docker', 'AWS'],
}

type SkillProgressBarType = { label: string; value: number }
function SkillProgressBar({ label, value }: SkillProgressBarType) {
  return (
    <div className="flex w-full flex-shrink flex-col">
      <div className="my-1 flex justify-between">
        <div className="text-sm leading-7">{label}</div>
        <div className="text-sm leading-7">{value}%</div>
      </div>
      <div className="flex h-1 bg-slate-200">
        <div className="h-1 bg-amber-400" style={{ width: value + '%' }}></div>
      </div>
    </div>
  )
}

export type NavigationItem = {
  name: string
  href: string
  current: boolean
  icon: any
}
type ProfileSidebarProps = {}
export default function ProfileSidebar(props: ProfileSidebarProps) {
  return (
    <div className="z-50 flex flex-1 flex-col rounded-lg bg-slate-800 shadow-md shadow-slate-800 md:w-72">
      <div className="flex flex-1 flex-col  ">
        <div className="flex flex-shrink-0 flex-col items-center  ">
          <div className="flex w-full flex-col items-center justify-center bg-slate-700  p-5 md:rounded-t-lg">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/1256596?v=4"
              height="100"
              width="100"
              layout="fixed"
              alt=""
            />
            <div className="flex flex-col items-center justify-center text-sm">
              <label className="text-slate-200">Hugo Cedano</label>
              <label className="text-slate-400">Fullstack</label>
              <label className="text-slate-400">Web 2.5 </label>
            </div>
          </div>
          <div className="flex w-full flex-col divide-y divide-slate-700 px-5">
            <div className="flex w-full flex-col py-5">
              <div className="flex items-center justify-between">
                <label htmlFor="residence" className="text-slate-200">
                  Residence
                </label>
                <span className="text-sm text-slate-400">Alabama, US</span>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="residence" className="text-slate-200">
                  City
                </label>
                <span className="text-sm text-slate-400">Deatsville</span>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="residence" className="text-slate-200">
                  Age
                </label>
                <span className="text-sm text-slate-400">32</span>
              </div>
            </div>
            <div className="flex w-full flex-col py-5">
              <label htmlFor="residence" className="text-slate-200">
                Bilingual
              </label>
              <ol className="mt-1 flex list-none items-center justify-evenly text-sm text-slate-400">
                {Object.keys(languages).map((lan, i) => (
                  <li key={i} className="flex flex-col items-center leading-6">
                    <CircularProgress value={languages[lan]} />
                    {lan}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex w-full flex-col justify-center py-5">
              <label htmlFor="residence" className="text-slate-200">
                Coding
              </label>
              <ol className="flex list-none flex-col justify-evenly text-sm text-slate-400">
                {Object.keys(skills).map((skill, i) => {
                  return (
                    <SkillProgressBar
                      key={i}
                      label={skill}
                      value={skills[skill]}
                    ></SkillProgressBar>
                  )
                })}
              </ol>
            </div>
            <div className="flex flex-col py-5">
              <label htmlFor="knowledge" className="text-slate-200">
                Knowledge
              </label>
              <ol className="flex list-none flex-col justify-between text-sm text-slate-400 ">
                {Object.keys(technologies).map((kind: any, i) => (
                  <li
                    key={i}
                    className="group mt-1 flex  text-sm leading-6 text-slate-400"
                  >
                    <CheckIcon className="mr-2 h-5 w-5  flex-shrink-0 text-amber-400" />
                    {technologies[kind].join(', ')}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
