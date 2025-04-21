	<?php
	header('Content-type: application/excel');
	$filename = 'AdjustmentReport-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);
	date_default_timezone_set('Asia/Manila');
	$member_count = 0;
	$thirty = 0;
	$sixty = 0;
	$ninety = 0;
	$onetweny = 0;
	$above = 0;
	$fund_name = $_GET['fund_name'];
	$description = $_GET['description'];
	$unit = $_GET['unit'];
	$property_no = $_GET['property_no'];
	$stock_no = $_GET['stock_no'];
	$item_name = $_GET['item_name'];
	$account = $_GET['account'];
	$formula = $_GET['formula'];
	$additional_desc = $_GET['additional_desc'];
	$preparedby = $_GET['preparedby'];
	$desig1 = $_GET['desig1'];
	$approvedby = $_GET['approvedby'];
	$desig2 = $_GET['desig2'];
	$as_of = $_GET['date_now'];
	$header = $_GET['center_fname'];
	$today = date("F j, Y");
	$level = $_GET['level'];
	$brand = $_GET['brand'];
	$Rbalance = 0;
	$QtyRbalance = 0;


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
				font-size: 100%;
				padding:5px;
				/* border: 1px solid black; */
			}
	
			@page { sheet-size: Legal; }
			
			@page {
				margin-top: 1cm;
				margin-bottom: 1.5cm;
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
				font-size: 110%;
				text-align:center;
				padding: 10px;
			}
	
		</style>
		<body>
			<?php //if($records): ?>
			<div class="half_me">
					<table width="100%">
						<tr>
							<td style="width:100%;text-align:left;"><img style="width:20%;" src="<?php echo base_url();?>assets/images/dswd_logo.png">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="width:100%;text-align:right;font-size:130%;">Appendix 58</i></td>
						</tr>
						<!-- <tr>
							<td style="width:100%;text-align:right;font-size:130%;"><i>Appendix 58</i></td>
						</tr> -->
					</table>
							<!-- <td style="width:20%;text-align:left;"><img style="width:20%;" src="./assets/images/dswd_logo.png"></td> -->
				<?php if($header):?>
					<h3 style="text-align:center;"><?php echo $header;?></h3>
				<?php else :?>
					<h3 style="text-align:center;">CONSOLIDATED REPORT</h3>
				<?php endif; ?>
				<h3 style="text-align:center;"><?php echo strtoupper($account); ?></h3>
			<?php if($level === "ADMIN" || $level === "SCHEMA ADMIN"):?>
				<h3 style="text-align:center;"><b>SUPPLIES LEDGER CARD<br></b></h3>
			<?php else:?>
				<h3 style="text-align:center;"><b>STOCK CARD<br></b></h3>
			<?php endif;?>
				<h3 style="text-align:center;">AS OF: <?php echo  $today;?></h3>
				<br><br><br><br>
				<table width="100%">
					<tr>
						<td style="font-weight:normal;width:65%;font-size:90%;"><b>Entity Name:</b> DEPARTMENT OF SOCIAL WELFARE AND DEVELOPMENT - 10</td>
						<td style="font-weight:normal;width:35%;font-size:90%;"><b>Fund Cluster:</b> <?php echo $fund_name; ?></td>
					</tr><br>
				</table><br><br>
				<?php if($formula == "noneweighted"):?>
					<table width="100%" style="table-layout: auto;">
					<tr>
						<td style="font-weight:normal;width:15%;font-size:70%;border:1px solid;">Item :</td>
						<td colspan="9" style="font-weight:normal;width:58%;font-size:70%;border:1px solid;"><b><?php echo $item_name; ?></b></td>
						<td style="font-weight:normal;width:8%;font-size:70%;border:1px solid;">Item Code :</td>
						<td style="font-weight:normal;width:8%;font-size:70%;border:1px solid;"><b><?php echo $property_no. "-" .$stock_no; ?></b></td>
						<td colspan="2" style="font-weight:normal;width:11%;font-size:70%;border:1px solid;"><b><?php echo $account; ?></b></td>
					</tr>
					<?php if($additional_desc): ?>
					<tr>
						<td style="font-weight:normal;width:10%;font-size:70%;border:1px solid;">Description :</td>
						<td colspan="9" style="font-weight:normal;width:60px;font-size:70%;border:1px solid;"><b><?php echo $brand . "-" . $description . "," . $additional_desc; ?></b></td>
						<td colspan="3" style="font-weight:normal;width:8%;font-size:70%;border:1px solid;">Re-order Point :</td>
						<td style="font-weight:normal;width:14%;font-size:70%;border:1px solid;"><b></b></td>
					</tr>
					<?php else: ?>
					<tr>
						<td style="font-weight:normal;width:10%;font-size:70%;border:1px solid;">Description :</td>
						<td colspan="9" style="font-weight:normal;width:60px;font-size:70%;border:1px solid;"><b><?php echo $brand . ", " . $description ; ?></b></td>
						<td colspan="3" style="font-weight:normal;width:8%;font-size:70%;border:1px solid;">Re-order Point :</td>
						<td style="font-weight:normal;width:14%;font-size:70%;border:1px solid;"><b></b></td>
					</tr>
					<?php endif; ?>
					<tr>
						<td style="font-weight:normal;width:10%;font-size:70%;border:1px solid;">Unit of Measurement :</td>
						<td colspan="9" style="font-weight:normal;width:60%;font-size:70%;border:1px solid;"><b><?php echo $unit; ?></b></td>
						<td colspan="4" style="font-weight:normal;width:8%;font-size:70%;border:1px solid;"></td>
					</tr>
					<tr>
						<td rowspan="2" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Date</td>
						<td colspan="3" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Reference</td>
						<td colspan="3" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Receipt</td>
						<td colspan="3" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Issue</td>
						<td colspan="3" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Balance</td>
						<td rowspan="2" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">No. of Days to Consume -- Division / Unit</td>
					</tr>
					<tr>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">PO</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">RIS</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">JEV</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Qty.</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Unit Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Total Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Qty.</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Unit Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Total Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Qty.</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Unit Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Total Cost</td>
					</tr>
					<tr>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><b>Beginning Balance</b></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
					</tr>
					<?php if($records): ?>
						<?php foreach($records as $record): ?>
						<?php 
							if($record->totalcost_rec > 0){
								$Rbalance = $Rbalance + $record->totalcost_rec;
								$QtyRbalance = $QtyRbalance + $record->qty_rec;
							}
							else if($record->totalcost_issue > 0){
								$Rbalance = $Rbalance - $record->totalcost_issue;
								$QtyRbalance = $QtyRbalance - $record->qty_issue;
							}	
						?> 
							<tr>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->trans_date;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->po_num;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->ris;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->jev;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo  $record->qty_rec;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->unit_rec, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->totalcost_rec, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo $record->qty_issue;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->unitcost_issue, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->totalcost_issue, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo $QtyRbalance;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($Rbalance, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->daysto_consume;?> -- <?php echo $record->division_unit;?> -- <?php echo $record->remarks;?></td>
							</tr>
						<?php endforeach;?>
					<?php endif;?>
						<tr>
							<td colspan="14" style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">
								******************************************************NOTHING FOLLOWS******************************************************
							</td>
						</tr>
				</table>
				<?php else:?>
				<table width="100%">
					<tr>
						<td style="font-weight:normal;width:15%;font-size:70%;border:1px solid;">Item :</td>
						<td colspan="9" style="font-weight:normal;width:58%;font-size:70%;border:1px solid;"><b><?php echo $item_name; ?></b></td>
						<td style="font-weight:normal;width:8%;font-size:70%;border:1px solid;">Item Code :</td>
						<td style="font-weight:normal;width:8%;font-size:70%;border:1px solid;"><b><?php echo $property_no. "-" .$stock_no; ?></b></td>
						<td colspan="2" style="font-weight:normal;width:11%;font-size:70%;border:1px solid;"><b><?php echo $account; ?></b></td>
					</tr>
					<?php if($additional_desc): ?>
					<tr>
						<td style="font-weight:normal;width:10%;font-size:70%;border:1px solid;">Description :</td>
						<td colspan="9" style="font-weight:normal;width:60px;font-size:70%;border:1px solid;"><b><?php echo $brand . "-" . $description . "," . $additional_desc; ?></b></td>
						<td colspan="3" style="font-weight:normal;width:8%;font-size:70%;border:1px solid;">Re-order Point :</td>
						<td style="font-weight:normal;width:14%;font-size:70%;border:1px solid;"><b></b></td>
					</tr>
					<?php else: ?>
					<tr>
						<td style="font-weight:normal;width:10%;font-size:70%;border:1px solid;">Description :</td>
						<td colspan="9" style="font-weight:normal;width:60px;font-size:70%;border:1px solid;"><b><?php echo $brand . "-" . $description; ?></b></td>
						<td colspan="3" style="font-weight:normal;width:8%;font-size:70%;border:1px solid;">Re-order Point :</td>
						<td style="font-weight:normal;width:14%;font-size:70%;border:1px solid;"><b></b></td>
					</tr>
					<?php endif; ?>
					<tr>
						<td style="font-weight:normal;width:10%;font-size:70%;border:1px solid;">Unit of Measurement :</td>
						<td colspan="9" style="font-weight:normal;width:60%;font-size:70%;border:1px solid;"><b><?php echo $unit; ?></b></td>
						<td colspan="4" style="font-weight:normal;width:8%;font-size:70%;border:1px solid;"></td>
					</tr>
					<tr>
						<td rowspan="2" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Date</td>
						<td colspan="3" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Reference</td>
						<td colspan="3" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Receipt</td>
						<td colspan="3" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Issue</td>
						<td colspan="3" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">Balance</td>
						<td rowspan="2" style="text-align:center;font-weight:normal;width:10%;font-size:70%;border:1px solid;">No. of Days to Consume -- Division-unit</td>
					</tr>
					<tr>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">PO</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">RIS</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">JEV</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Qty.</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Unit Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Total Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Qty.</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Unit Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Total Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Qty.</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Unit Cost</td>
						<td style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">Total Cost</td>
					</tr>
					<tr>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><b>Beginning Balance</b></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
						<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"></td>
					</tr>
					<?php if($records): ?>
						<?php foreach($records as $record): ?>
						<?php 
							if($record->totalcost_rec > 0){
								$Rbalance = $Rbalance + $record->totalcost_rec;
								$QtyRbalance = $QtyRbalance + $record->qty_rec;
							}
							else if($record->totalcost_issue > 0){
								$Rbalance = $Rbalance - $record->totalcost_issue;
								$QtyRbalance = $QtyRbalance - $record->qty_issue;
							}	
						?> 
							<tr>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->trans_date;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->po_num;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->ris;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->jev;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo  $record->qty_rec;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->unit_rec, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->totalcost_rec, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo $record->qty_issue;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->unitcost_issue, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->totalcost_issue, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo $QtyRbalance;?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($record->unitcost_bal, 2, '.', ',');?></td>
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><?php echo number_format($QtyRbalance * $record->unitcost_bal, 2, '.', ',');?></td>
								<!-- <td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;text-align:right;"><//?php echo number_format($Rbalance, 2, '.', ',');?></td> -->
								<td style="font-weight:normal;width:7%;font-size:70%;border:1px solid;"><?php echo $record->daysto_consume;?> -- <?php echo $record->division_unit;?>-- <?php echo $record->remarks;?></td>
							</tr>
						<?php endforeach;?>
					<?php endif;?>
						<tr>
							<td colspan="14" style="text-align:center;font-weight:normal;width:7%;font-size:70%;border:1px solid;">
								******************************************************NOTHING FOLLOWS******************************************************
							</td>
						</tr>
				</table>
				<?php endif; ?>
				<br><br><br><br><br><br><br><br>
				<div style="text-align: center;">
					<!-- Page {PAGENO} of {nbpg} -->
					<table width="100%">
					<tr>
						<th style="font-weight:bold;width:10%;font-size:80%;">Prepared by:</th>
						<th style="font-weight:bold;width:30%;border-bottom:1px solid;font-size:90%;"><?php echo $preparedby; ?></th>
						<th style="font-weight:bold;width:10%;font-size:80%;font-size:80%">Certified by:</th>
						<th style="font-weight:bold;width:30%;border-bottom:1px solid;font-size:90%;"><?php echo $approvedby; ?></th>
					</tr>
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:normal;width:30%;font-size:70%;text-align:center;"><?php echo $desig1; ?></td>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:normal;width:30%;font-size:70%;text-align:center;"><?php echo $desig2; ?></td>
					</tr>
				</table>
				</div>
			</div>
		</div>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				<h6 style="text-align:center;">Page {PAGENO} of {nbpg}</h6>
				<h6 style="text-align:left;">Generated by PIMS v1.1 (<?php echo date("m/d/Y");?>)</h6>
			</htmlpagefooter>
		</body>
	</html>