import { useState } from 'react'
import type { FaqItem } from '../types/retreat'

type FaqAccordionProps = {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index
        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  {open ? '–' : '+'}
                </span>
              </button>
            </h3>
            <div hidden={!open}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
