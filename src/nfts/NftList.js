import React from 'react';
import NftData from '../data/test_data.json';
import { Box, Center, Text, Stack, Grid, GridItem, SimpleGrid, Circle } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

const makeColors = ["#2115A9 10.54%, #FFFFFF 132.1%", "#52FF00 10.54%, #FFFFFF 132.1%", "#35FFCF 10.54%, #FFFFFF 132.1%", "#FFC93D 10.54%, #FFFFFF 132.1%"]
const takeColors = ["#48FFA7 10.54%, #FFFFFF 132.1%", "#FFC93D 10.54%, #FFFFFF 132.1%", "#1ABBEE 10.54%, #FFFFFF 132.1%", "#EE1A1A 10.54%, #FFFFFF 132.1%"]

export default function NftList () {

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
						<Box 
							w="70vw" 
							h="20vh" 
							borderWidth="1px" 
							borderRadius="lg"	
							mt="15px" mb="15px" 
							color="white"
							p="1rem"
							backgroundColor="rgba(255, 255, 255, 0.05)"
						>
							
							<Center >
							<SimpleGrid columns={5} spacing='.25rem' m='1rem'>

								<Center>
								<SimpleGrid column={1}>
								{take.map((takeDetails) => {
									return (
										<Text fontSize="xs" textAlign="left">
											• {takeDetails.amount || "1"} {takeDetails.tokenName}
										</Text>
									)
								})}
								</SimpleGrid>
								</Center>
							
								<Center>
								<SimpleGrid columns={2}>
									<SimpleGrid colums={1}>
										{take.length > 4 && <Text mt="34px" fontSize="xs">+{take.length - 4}</Text>}
									</SimpleGrid>
									<SimpleGrid columns={2} spacing='.2rem'>
										{take.map((takeOrder, index) => {
											const boxSize = take.length > 1 ? '2.5rem' : '5.5rem'
											return (index < 4) && (
												<>
													<Box minHeight={boxSize} width={boxSize} borderRadius="8px" bgGradient={`linear(to-br, ${makeColors[index]})`} />
												</>
											)
										})}
									</SimpleGrid>
								</SimpleGrid>
								</Center>

								<Center>
								<SimpleGrid columns={1} m="1rem">
									<Box width="auto">
											<Circle size="40px" bg="white">
											<Stack>
												<ArrowForwardIcon color="#0D0844" ml="6px" mb="-12px"/>
												<ArrowBackIcon color="#0D0844"/>
											</Stack>
											</Circle>
									</Box>
								</SimpleGrid>
								</Center>
								
								<Center>
									<SimpleGrid columns={2}>
										<SimpleGrid columns={2} spacing='.2rem'>
											{make.map((makeOrder, index) => {
												const boxSize = make.length > 1 ? '2.5rem' : '5.5rem'
												return (index < 4) && (
													<>
														<Box minHeight={boxSize} width={boxSize} borderRadius="8px" bgGradient={`linear(to-br, ${takeColors[index]})`} />
													</>
												)
											})}
										</SimpleGrid>
										<SimpleGrid columns={1}>
										{make.length > 4 && <Text mt="34px" fontSize="xs">+{make.length - 4}</Text>}
										</SimpleGrid>
									</SimpleGrid>
								</Center>
								
								<Center>
								<SimpleGrid column={1}>
								{make.map((makeDetails) => {
									return (
										<Text fontSize="xs" textAlign="left">
											• {makeDetails.amount || "1"} {makeDetails.tokenName}
										</Text>
									)
								})}
								</SimpleGrid>
								</Center>
								
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

