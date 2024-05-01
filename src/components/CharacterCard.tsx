type Props = {
    url :string, 
    name:string, 
    species:string
}

const CharacterCard = ({url,name,species}: Props) => {
  return (
    <>
        <a
          href="#"
          className={`flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 bg-background`}
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={url}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-muted-foreground dark:text-white">
              {name}
            </h5>
            <p className="mb-3 font-normal text-muted-foreground">{species}</p>
          </div>
        </a>
      </>
  )
}

export default CharacterCard