'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { muralCategories, muralSortOptions } from '@/data/mural';
import styles from './mural.module.scss';

interface MuralFiltersProps {
  searchTerm: string;
  category: string;
  sortId: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export function MuralFilters({
  searchTerm,
  category,
  sortId,
  onSearchChange,
  onCategoryChange,
  onSortChange
}: MuralFiltersProps) {
  return (
    <section className={styles.filters} aria-label="Filtros e busca do mural de duvidas">
      <div className={styles.filtersRow}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} aria-hidden="true" />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar no mural por assunto ou palavra-chave"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="Buscar no mural de duvidas"
          />
        </div>

        <div className={styles.selectGroup}>
          <label htmlFor="mural-filtro-categoria" className={styles.selectLabel}>
            Categoria
          </label>
          <select
            id="mural-filtro-categoria"
            className={styles.select}
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            {muralCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label htmlFor="mural-filtro-ordenacao" className={styles.selectLabel}>
            Ordenar por
          </label>
          <select
            id="mural-filtro-ordenacao"
            className={styles.select}
            value={sortId}
            onChange={(event) => onSortChange(event.target.value)}
          >
            {muralSortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
