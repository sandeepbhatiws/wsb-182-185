import { useState, useMemo, useEffect } from 'react'
import { ProductCard } from '../components/ProductCard'
import './Products.css'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import axios from 'axios'
import { toast } from 'react-toastify'

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [sortBy, setSortBy] = useState('');

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
    .then((result) => {
      setCategories(result.data.data)
    })
    .catch(() => {
        toast.error('Something went wrong !');
    })
  
    axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
    .then((result) => {
      setBrands(result.data.data)
    })
    .catch(() => {
        toast.error('Something went wrong !');
    })
  },[])


  useEffect(() => {
    axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
      params : {
        limit : 20,
        page : currentPage,
        sorting : sortBy,
        categories : selectedCategories.toString(),
        brands : selectedBrands.toString()
      }
    })
    .then((result) => {
      setProducts(result.data.data)
      setTotalPages(result.data.total_pages)
    })
    .catch(() => {
        toast.error('Something went wrong !');
    })
  },[currentPage, sortBy, selectedCategories, selectedBrands])

  const filterSorting = (event) => {
    setCurrentPage(1);
    setSortBy(event.target.value);
  }


  const filteredAndSortedProducts = [];

  // const selectedCategories = () => {

  // }

  const showFilters = () => {
    
  }

  const resetFilters = () => {
    
  }

  // 
  // const [selectedBrands, setSelectedBrands] = useState([])
  // const [priceRange, setPriceRange] = useState({ min: 0, max: 200 })
  // const [minRating, setMinRating] = useState(0)
  // const [sortBy, setSortBy] = useState('name')
  // const [showFilters, setShowFilters] = useState(true)

  // const filteredAndSortedProducts = useMemo(() => {
  //   let filtered = products.filter(product => {
  //     const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
  //     const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
  //     const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max
  //     const ratingMatch = product.rating >= minRating
      
  //     return categoryMatch && brandMatch && priceMatch && ratingMatch
  //   })

  //   // Sorting
  //   filtered.sort((a, b) => {
  //     switch (sortBy) {
  //       case 'price-low':
  //         return a.price - b.price
  //       case 'price-high':
  //         return b.price - a.price
  //       case 'rating':
  //         return b.rating - a.rating
  //       case 'name':
  //       default:
  //         return a.name.localeCompare(b.name)
  //     }
  //   })

  //   return filtered
  // }, [selectedCategories, selectedBrands, priceRange, minRating, sortBy])

  // Reset page when filters/sort change
  // useEffect(() => {
  //   setCurrentPage(1)
  // }, [selectedCategories, selectedBrands, priceRange.min, priceRange.max, minRating, sortBy])

  // const totalPages = Math.max(1, Math.ceil(filteredAndSortedProducts.length / pageSize))
  // const paginatedProducts = filteredAndSortedProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const toggleCategory = (slug) => {
    setCurrentPage(1)

    var checkCategory = selectedCategories.filter((v) => {
      if(v == slug){
        return v;
      }
    })

    if(checkCategory.length > 0){
      var data = selectedCategories.filter((v) => {
        if(v != slug){
          return v;
        }
      })
      var data = [...data];
      setSelectedCategories(data);
    } else {
      const data = [...selectedCategories, slug];
      setSelectedCategories(data);
    }
  }

  const toggleBrand = (slug) => {
    setCurrentPage(1)

    var checkBrand = selectedBrands.filter((v) => {
      if(v == slug){
        return v;
      }
    })

    if(checkBrand.length > 0){
      var data = selectedBrands.filter((v) => {
        if(v != slug){
          return v;
        }
      })
      var data = [...data];
      setSelectedBrands(data);
    } else {
      const data = [...selectedBrands, slug];
      setSelectedBrands(data);
    }
  }

  // const resetFilters = () => {
  //   setSelectedCategories([])
  //   setSelectedBrands([])
  //   setPriceRange({ min: 0, max: 200 })
  //   setMinRating(0)
  //   setSortBy('name')
  // }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <button 
          className="toggle-filters-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? '✕ Hide Filters' : '☰ Show Filters'}
        </button>
      </div>

      <div className="products-container">
        {/* Sidebar Filters */}
        <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
          <div className="filters-header">
            <h2>Filters</h2>
            <button onClick={resetFilters} className="reset-filters">Reset</button>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h3 className="filter-title">Category</h3>
            <div className="filter-options">
              {categories.map(category => (
                <label key={category.id} className="filter-option">
                  <input
                    type="checkbox"
                    // checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category.slug)}
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="filter-group">
            <h3 className="filter-title">Brand</h3>
            <div className="filter-options">
              {brands.map(brand => (
                <label key={brand.id} className="filter-option">
                  <input
                    type="checkbox"
                    // checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand.slug)}
                  />
                  <span>{brand.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          {/* <div className="filter-group">
            <h3 className="filter-title">Price Range</h3>
            <div className="price-filter">
              <div className="price-input-group">
                <label>Min: ${priceRange.min}</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                />
              </div>
              <div className="price-input-group">
                <label>Max: ${priceRange.max}</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                />
              </div>
            </div>
          </div> */}

          {/* Rating Filter */}
          {/* <div className="filter-group">
            <h3 className="filter-title">Rating</h3>
            <div className="rating-filter">
              {[0, 3, 4, 4.5].map(rating => (
                <label key={rating} className="filter-option">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={minRating === rating}
                    onChange={() => setMinRating(rating)}
                  />
                  <span>
                    {rating === 0 ? 'All Ratings' : `${rating}★ & up`}
                  </span>
                </label>
              ))}
            </div>
          </div> */}
        </aside>

        {/* Products Display */}
        <main className="products-main">
          <div className="products-toolbar">
            <div className="results-info">
              {products.length} products found
            </div>
            <div className="sort-options">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                // value={sortBy}
                // onChange={(e) => setSortBy(e.target.value)}

                onChange={ filterSorting }
              >
                <option value="0">Select SortBy</option>
                <option value="1">Name (A-Z)</option>
                <option value="2">Name (Z-A)</option>
                <option value="3">Price (Low to High)</option>
                <option value="4">Price (High to Low)</option>
                <option value="rating">Rating (Highest First)</option>
              </select>
            </div>
          </div>

          {products.length > 0 ? (
            <>
              <div className="products-grid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination-wrap">
                  <ResponsivePagination
                    total={totalPages}
                    current={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="no-products">
              <p>No products found matching your criteria.</p>
              <button onClick={resetFilters} className="reset-btn">
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
