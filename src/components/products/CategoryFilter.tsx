interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  isMobile: boolean;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategorySelect,
  isMobile,
}: CategoryFilterProps) => {
  return (
    <div className={`flex ${isMobile ? "flex-wrap" : ""} gap-2 md:gap-4 mb-8`}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-3 md:px-4 py-2 rounded-lg transition-colors whitespace-nowrap text-sm md:text-base ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};