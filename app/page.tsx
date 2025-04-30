import Header from "@/components/header"
import ImageSlider from "@/components/image-slider"
import InfoBlock from "@/components/info-block"

export default function Home() {
  const slides = [
    {
      id: 1,
      image: "/slider-1.jpg",
      title: "АКЦІЯ В ОПТИКАХ",
      subtitle: "ЗАСОБИ ДЛЯ КОРЕКЦІЇ ЗОРУ",
    },
    {
      id: 2,
      image: "/slider-2.jpg",
      title: "ОТРИМАЙ БЕЗКОШТОВНО",
      subtitle: "ПЕРЕВІРКУ ЗОРУ ЛІКАРЕМ",
    },
    {
      id: 3,
      image: "/slider-3.jpg",
      title: "ПІДБІР ЗАСОБІВ КОРЕКЦІЇ",
      subtitle: "ЛІЦЕНЗОВАНІ ОФТАЛЬМОЛОГИ",
    },
  ]

  const infoBlocks = [
    {
      id: 1,
      title: "Професійна консультація",
      description: "Наші ліцензовані офтальмологи вищих категорій нададуть вам професійну консультацію",
      icon: "eye",
    },
    {
      id: 2,
      title: "Широкий асортимент",
      description: "Великий вибір оправ, лінз та аксесуарів для корекції зору",
      icon: "glasses",
    },
    {
      id: 3,
      title: "Гарантія якості",
      description: "Всі наші товари сертифіковані та мають гарантію якості",
      icon: "badge-check",
    },
  ]

  return (
    <div className="flex flex-col">
      <Header />
      <ImageSlider slides={slides} />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Наші послуги</h2>
        <div className="space-y-4">
          {infoBlocks.map((block) => (
            <InfoBlock key={block.id} title={block.title} description={block.description} icon={block.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
