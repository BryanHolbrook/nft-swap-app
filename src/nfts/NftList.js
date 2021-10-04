import React from 'react';
import NftData from '../data/test_data.json';
import { Box, Center, Text, Grid, GridItem, SimpleGrid, Square, Circle } from "@chakra-ui/react"

export default function NftList () {
	const makeColors = ["green.200, pink.500", "gray.300, yellow.400", "teal.300, yellow.400", "blue.200, teal.500", "orange.100, purple.300"]
	const takeColors = ["teal.500, green.500", "gray.500, yellow.200", "green.500, pink.200", "teal.400, yellow.300", "blue.500, teal.200"]
	return (
		<div>
			{NftData.map((nftDetail) => {
				const take = nftDetail.filter((item) => item.side === 'TAKE')
				const make = nftDetail.filter((item) => item.side === 'MAKE')
				console.log(nftDetail)
				return (
					<>
					<Grid>
					<Center>
					<GridItem>
						<Box w="70vw" h="20vh" borderWidth="1px" borderRadius="lg"	mt="15px" mb="15px" color="white">
							<Center>
								<SimpleGrid columns={2} spacing='10px'>
									{take.map((takeOrder, index) => {
										const boxSize = take.length > 1 ? '40px' : '90px'

										return (index < 4) && (
											<>
												{/* <p>{takeOrder.tokenName}</p> */}
												<Box minHeight={boxSize} width={boxSize} borderRadius="8px" bgGradient={`linear(to-r, ${makeColors[index]})`} />
											</>
										)
									})}
									
								</SimpleGrid>

								<Box width={{ md: 40 }} alignContent="center">
										<Circle size="40px" bg="white" />
								</Box>
								
								<SimpleGrid columns={2} spacing='10px'>
									{make.map((makeOrder, index) => {
										const boxSize = make.length > 1 ? '40px' : '90px'

									  return (index < 4) && (
											<>
												<Box minHeight={boxSize} width={boxSize} borderRadius="8px" bgGradient={`linear(to-l, ${takeColors[index]})`} />
												{/* <p>{makeOrder.tokenName}</p> */}
											</>
										)
									})}
								</SimpleGrid>
							</Center>
						</Box>
					</GridItem>
					
					<GridItem>
						<Box 
							as="button" 
							bg="#38E7C1" 
							px="24px" 
							py="5px" 
							borderRadius="100px" 
							fontSize="14px" 
							fontWeight="bold" 
							ml="30%" 
							mr="30%" 
						 	color="#0D0844" 
							_hover={{ bg: "#ebedf0" }}
							_active={{
								bg: "#dddfe2",
								transform: "scale(0.98)",
								borderColor: "#bec3c9",
  						}}
						>
							Take
						</Box>
					</GridItem>
					
					</Center>
					</Grid>
					</>
				)
			})}
		</div>
	)
}

