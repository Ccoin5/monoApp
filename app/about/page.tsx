import Header from "@/components/header"

export default function About() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Про нас</h1>

        <div className="space-y-4">
          <p>
            Monoptica - це мережа оптик, де працюють ліцензовані офтальмологи вищих категорій. Ми пропонуємо широкий
            асортимент засобів для корекції зору та професійну консультацію.
          </p>

          <h2 className="text-xl font-semibold mt-4">Наші переваги</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Безкоштовна перевірка зору лікарем</li>
            <li>Виписка рецепту</li>
            <li>Професійний підбір засобів корекції</li>
            <li>Гарантія якості на всі товари</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
