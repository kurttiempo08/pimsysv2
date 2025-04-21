<?php
	header('Content-type: application/excel');
	$filename = 'AdjustmentReport-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);
	date_default_timezone_set('Asia/Manila');
	// $member_count = 0;
	// $thirty = 0;
	// $sixty = 0;
	// $ninety = 0;
	// $onetweny = 0;
	// $above = 0;
	//  $aimonitoring_id = $_GET['aimonitoring_id'];
	//  $recepient_name = $_GET['recepient_name'];
	 $datefrom = $_GET['datefrom'];
	 $client_barangay = $_GET['client_barangay'];
	 $account = $_GET['office'];
	 $formula = $_GET['formula'];
	 $preparedby = $_GET['preparedby'];
	 $desig1 = $_GET['desig1'];
	 $approvedby = $_GET['approvedby'];
	 $desig2 = $_GET['desig2'];
	 $as_of = $_GET['date_now'];
	 $today = date("F j, Y");
	 $center_name = $_GET['centername'];
	 $grandtotal = 0;
	 $level = $_GET['level'];
	 $center = $_GET['center'];
	 $fund = $_GET['fund'];
	// $recp_contact = $_GET['recp_contact'];
	// $recp_address = $_GET['recp_address'];
	// $animal_type = $_GET['animal_type'];
	// $insemination_date = $_GET['insemination_date'];
	// $monitoring_date = $_GET['monitoring_date'];
	// $diagnosis_date = $_GET['diagnosis_date'];
	// $parturitionfrom_date = $_GET['parturitionfrom_date'];
	// $parturitionto_date = $_GET['parturitionto_date'];
	// $status = $_GET['status'];
	// $remarks = $_GET['remarks'];
	// $technician = $_GET['technician'];
	// $semensource = $_GET['semensource'];
	// $animal_code = $_GET['animal_code'];
	// $actual_date = $_GET['actual_date'];
	// $pregnancy = $_GET['pregnancy'];
	// $receivedby = $_GET['receivedby'];
	// $technician = $_GET['technician'];
	// $other_reason = $_GET['others'];
	// $pregnancy = $_GET['pregnancy'];
	$total = 0;
	$finaltotal = 0;
	



	?>
	<html xmlns:x="urn:schemas-microsoft-com:office:excel">
		<head>
		
			<!--[if gte mso 9]>
			<xml>
				<x:ExcelWorkbook>
					<x:ExcelWorksheets>
						<x:ExcelWorksheet>
							<x:Name>Sheet 1</x:Name>
							<x:WorksheetOptions>
								<x:Print>
									<x:ValidPrinterInfo/>
								</x:Print>
							</x:WorksheetOptions>
						</x:ExcelWorksheet>
					</x:ExcelWorksheets>
				</x:ExcelWorkbook>
			</xml>
			<![endif]-->
		</head>
		<style>
			body {
				font-family: 'Tahoma';
			}

			table {
				border-spacing: -1px;
				border-width:thin;
			}

			td {
				font-size: 120%;
				padding:5px;
				/* border: 1px solid black; */
			}
	
			@page { sheet-size: Legal;}
			
			@page {
				margin-top: 1cm;
				margin-bottom: 1cm;
				margin-left: 1cm;
				margin-right: 1cm;
				odd-footer-name: html_myFooter;
			}
			
			h1.bigsection {
					page-break-before: always;
					page: bigger;
			}

			.main_t td{
			}

			th {
				font-size: 80%;
				text-align:center;
				padding: 10px;
			}
	
		</style>
		<body>
		<?php //var_dump($records);?>
			<?php //if($records): ?>
			<div class="half_me">
					<table width="100%">
						<tr>
							<td style="width:100%;text-align:left;"><img style="width:20%;" src="<?php echo base_url();?>assets/images/dswd_logo.png"></td>
						</tr>
					</table>
				<br>
				<h3 style="text-align:center;">DEPARTMENT OF SOCIAL WELFARE AND DEVELOPMENT REGION - 10</h3>

				<?php if($level === "SUPPLY"):?>
					<h3 style="text-align:center;">REPORT OF PHYSICAL COUNT ON INVENTORIES</h3>
				<?php elseif($level === "ADMIN"):?>
					<h3 style="text-align:center;">CONSOLIDATED INVENTORY ACCOUNTS REPORT</h3>
				<?php elseif($level === "SCHEMA ADMIN"):?>
					<h3 style="text-align:center;">CONSOLIDATED INVENTORY ACCOUNTS REPORT</h3>
				<?php else: ?>
				<h3 style="text-align:center;">CONSOLIDATED INVENTORY ACCOUNTS REPORT</h3>
				<h3 style="text-align:center;"><?php echo $center;?></h3>
				<?php endif; ?>
				<?php if($fund === "KALAHI"):?>
					<h3 style="text-align:center;">FUND CLUSTER 2</h3>
				<?php else: ?>
					<h3 style="text-align:center;">FUND CLUSTER 1</h3>
				<?php endif; ?>
					<table width="100%">
					<thead>
						<tr>
							<th style="font-weight:bold;border:1px solid;width:20%;">ACCOUNT NAME</th>
							<th style="font-weight:bold;border:1px solid;width:10%;">ACCOUNT CODE</th>
							<th style="font-weight:bold;border:1px solid;width:11%;">AMOUNT</th>
						</tr>
					</thead>
						
					<tbody>
						<?php foreach($accounts as $acct):
								if (empty($items)){
						?>
					
						<?php
							}
								else{
										foreach($items as $item): 
										if($acct->office_id == "$item->office_idlink"){
											if($acct->office_code === "KALAHI"){
												$grandtotal = $grandtotal + $item->totalcost;
												$finaltotal = $finaltotal + $grandtotal;
											}	
						?>
							
						<tr>
							<td style="border:1px solid;font-size:10px"><?php echo $acct->office;?></td>
							<td style="border:1px solid;font-size:10px;text-align:center;"><?php echo $acct->office_code;?></td>
							<td style="border:1px solid;font-size:10px;text-align:right;">
								<?php 
									echo number_format($grandtotal,2);
								?>
							</td>
						</tr>
							<?php
									}
								endforeach;
								}
									$grandtotal = 0; 
							endforeach;
							?>
						<tr>
							<td style="border:1px solid;font-size:10px"></td>
							<td style="border:1px solid;font-size:10px;text-align:center;font-weight:bold;">Grand Total: </td>
							<td style="border:1px solid;font-size:10px;text-align:right;font-weight:bold;"><?php echo number_format($finaltotal,2);?>
							</td>
						</tr>
					</tbody>
					</table>
				<br><br><br><br><br>
				<table width="100%">
					<tr>
						<th style="font-weight:bold;width:10%;">Prepared by:</th>
						<th style="font-weight:bold;width:30%;border-bottom:1px solid;"><?php echo $preparedby;?></th>
						<th style="font-weight:bold;width:10%;">Certified by:</th>
						<th style="font-weight:bold;width:30%;border-bottom:1px solid;"><?php echo $approvedby;?></th></th>
					</tr>
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:normal;width:30%;font-size:70%;text-align:center;"><?php echo $desig1;?></td>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:normal;width:30%;font-size:70%;text-align:center;"><?php echo $desig2;?></td>
					</tr>
				</table>
			</div>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				
				<h6 style="text-align:center;">Page {PAGENO} of {nbpg}</h6>
				<h6 style="text-align:left;">Generated by PIMS v1.1 (<?php echo date("m/d/Y");?>)</h6>
					
				<br><br><br><br>
				</div>
			</htmlpagefooter>
		</body>
	</html>