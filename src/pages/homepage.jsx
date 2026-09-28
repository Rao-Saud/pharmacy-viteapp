import {Flex, Card, Image, Text, Button, Input } from "@chakra-ui/react"
import {medicines} from '../mock_data/mockMedicines'
import {useState, useEffect} from 'react'

export default function Homepage() {

    const [search, setSearch] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelectedFilters([...selectedFilters, value]);
        } else {
            setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
        }
    };

    let medicinesArray = medicines;
    const filteredMedicines = medicinesArray.filter((medicine) => {
        if (selectedFilters.length === 0) return true; // return all medicines if no filters are selected
        return selectedFilters.includes(medicine.category); // return true if the medicine's category is in the selected filters
        });

    

    return (
        <>
            <Input 
                placeholder="Search medicines..." 
                variant="subtle" 
                className="search-input"
                onChange={(e) => setSearch(e.target.value)}

            />
            <h1>Homepage</h1>
            <p>Welcome to the Homepage!</p>
            <Flex gap="4" justifyContent="center">
            <div>
                <input type="checkbox" name="pain-relief" value="Pain Relief" onChange={handleFilterChange} />
                <label htmlFor="pain-relief">Pain Relief</label>
            </div>
            <div>
                <input type="checkbox" name="Gastrointestinal" value="Gastrointestinal" onChange={handleFilterChange} />
                <label htmlFor="Gastrointestinal">Gastrointestinal</label>
            </div>
            <div>
                <input type="checkbox" name="Pediatric" value="Pediatric" onChange={handleFilterChange}/>
                <label htmlFor="Pediatric">Pediatric</label>
            </div>
            <div>
                <input type="checkbox" name="Antibiotics" value="Antibiotics" onChange={handleFilterChange} />
                <label htmlFor="Antibiotics">Antibiotics</label>
            </div>
            </Flex>
            <Flex wrap="wrap" gap="4" justifyContent="center">
            {
                filteredMedicines.filter((medicine) => {
                    return search.toLowerCase() === '' ? medicine : medicine.name.toLowerCase().includes(search.toLowerCase())//This ensures that if the search input is empty, all medicines are returned; otherwise, only medicines whose names include the search term are returned.
                }).map((medicine) => (
                    <Card.Root key = {medicine.id} maxW="sm" overflow="hidden">
                        <Card.Body gap="2">
                            <Card.Title>{medicine.name}</Card.Title>
                            <Card.Description>
                                {medicine.description}
                                </Card.Description>
                                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                    ${medicine.price.toFixed(2)}
                                </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Card.Footer>
                    </Card.Root>
                ))
            }
            </Flex> 
        </>
    );
}