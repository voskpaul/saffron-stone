"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Search, SearchX, X } from "lucide-react"
import { formatPrice, menuCategories, menuItems } from "@/lib/restaurant-data"

type CategoryFilter = "all" | (typeof menuCategories)[number]["id"]

export function MenuExplorer() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all")
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()

    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory
      const categoryName = menuCategories.find((category) => category.id === item.category)?.label ?? ""
      const matchesQuery = !normalizedQuery || `${item.name} ${item.description} ${categoryName}`.toLocaleLowerCase().includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <section aria-label="Browse menu" className="menu-explorer">
      <div className="menu-tools">
        <div className="menu-search">
          <Search size={18} aria-hidden="true" />
          <label className="sr-only" htmlFor="menu-search-input">Search the menu</label>
          <input
            autoComplete="off"
            id="menu-search-input"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dishes, ingredients, drinks…"
            type="search"
            value={query}
          />
          {query && (
            <button aria-label="Clear menu search" className="menu-search__clear" onClick={() => setQuery("")} type="button">
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>
        <span className="menu-tools__hint">{menuItems.length} sample dishes</span>
      </div>

      <div aria-label="Filter by category" className="menu-category-list" role="group">
        <button
          aria-pressed={activeCategory === "all"}
          className={`category-chip${activeCategory === "all" ? " is-active" : ""}`}
          onClick={() => setActiveCategory("all")}
          type="button"
        >
          All dishes
        </button>
        {menuCategories.map((category) => (
          <button
            aria-pressed={activeCategory === category.id}
            className={`category-chip${activeCategory === category.id ? " is-active" : ""}`}
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>

      <p className="menu-results-count" aria-live="polite">
        {filteredItems.length === 1 ? "1 item" : `${filteredItems.length} items`} shown
        {activeCategory !== "all" ? ` in ${menuCategories.find((category) => category.id === activeCategory)?.label}` : ""}
      </p>

      {filteredItems.length > 0 ? (
        <div className="menu-list">
          {filteredItems.map((item) => {
            const category = menuCategories.find((entry) => entry.id === item.category)?.label

            return (
              <article className="menu-list-item" key={item.id}>
                {item.image && (
                  <div className="menu-list-item__image">
                    <Image alt={item.imageAlt ?? item.name} fill sizes="96px" src={item.image} />
                  </div>
                )}
                <div className="menu-list-item__copy">
                  <div className="menu-list-item__title-line">
                    <h2>{item.name}</h2>
                    <span className="menu-list-item__price">{formatPrice(item.price)}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="menu-list-item__tags">
                    <span>{category}</span>
                    {item.dietaryLabel && <span className="dietary-tag">{item.dietaryLabel}</span>}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="menu-empty" role="status">
          <span className="menu-empty__icon"><SearchX size={23} aria-hidden="true" /></span>
          <h2>No dishes found</h2>
          <p>Try another search term or reset the category filter.</p>
          <button className="button button--outline button--small" onClick={() => { setQuery(""); setActiveCategory("all") }} type="button">
            Show all dishes
          </button>
        </div>
      )}

      <aside className="menu-allergy-note">
        <strong>Ingredient note</strong>
        <p>Recipes shown here are illustrative. If you have an allergy or need ingredient details, confirm directly with the restaurant before ordering.</p>
      </aside>
      <p className="menu-disclaimer menu-disclaimer--page">Fictional portfolio menu. Prices, availability and restaurant details are sample content, not a live offer.</p>
    </section>
  )
}
